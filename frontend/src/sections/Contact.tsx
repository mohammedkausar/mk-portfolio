import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { API_CONFIG } from "@/config/api";

const Contact = ({ contactData }: any) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${API_CONFIG.BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json(); // 🔑 read backend response

      if (!res.ok) {
        throw new Error(data.detail || "Something went wrong");
      }

      setStatus("success");
      // e.currentTarget.reset(); // optional
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="app-container">
        <Card className="max-w-xl mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-medium">
              {contactData.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {contactData.description}
            </p>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {contactData.fields.map((field: any) => (
                <div key={field.name} className="space-y-1">
                  <label className="text-sm font-medium">{field.label}</label>

                  {field.type === "textarea" ? (
                    <Textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      className="min-h-[120px]"
                      required
                    />
                  ) : (
                    <Input
                      name={field.name}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      pattern={field.type === "tel" ? "[0-9+ ]*" : undefined}
                    />
                  )}

                  {field.hint && (
                    <p className="text-xs text-muted-foreground">
                      {field.hint}
                    </p>
                  )}
                </div>
              ))}

              <input type="text" name="company" className="hidden" />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : contactData.submitText}
              </Button>

              {status === "success" && (
                <p className="text-sm text-center text-green-600">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-center text-red-600">
                  {errorMessage}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
