import { useState } from "react";
import { Linkedin } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { EMAIL, LINKEDIN_URL } from "../components/SocialLinks";
import { usePageMeta } from "../lib/usePageMeta";

export default function Contact() {
  usePageMeta({ title: "Contact — Jaimin Naykawala", description: "Hire Jaimin Naykawala for SEO consulting, contract, or full-time work." });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageLayout title="Contact">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="mb-2 text-3xl font-semibold">Let's talk.</h1>
        <p className="mb-8 text-sm text-[var(--muted-foreground)]">
          Tell me about the project. I read every message and reply within 24 hours.
        </p>

        {sent ? (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-sm">
            Your email client should now be open. If nothing happened, send to{" "}
            <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div>
              <Label>Your name</Label>
              <Input required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label>Email</Label>
              <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className="flex items-center justify-between">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                <Linkedin className="h-4 w-4" /> Or message on LinkedIn
              </a>
              <Button type="submit">Send</Button>
            </div>
          </form>
        )}
      </div>
    </PageLayout>
  );
}
