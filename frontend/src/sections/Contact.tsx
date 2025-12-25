import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = ({ contactData }: any) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);

    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
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
                    />
                  ) : (
                    <Input
                      name={field.name}
                      type={field.type}
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

              <Button type="submit" className="w-full " disabled={loading}>
                {loading ? "Sending..." : contactData.submitText}
              </Button>

              {status === "success" && (
                <p className="text-sm text-green-600">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again.
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
