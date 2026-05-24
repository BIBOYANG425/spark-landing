"use client";

export function NewsletterForm() {
  return (
    <form
      className="footer-newsletter"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = (data.get("email") as string) || "";
        const subject = encodeURIComponent("Spark pilot waitlist");
        const body = encodeURIComponent(`Add me to the waitlist.\n\nEmail: ${email}`);
        window.location.href = `mailto:yangb7777@gmail.com?subject=${subject}&body=${body}`;
      }}
    >
      <label className="footer-newsletter-label" htmlFor="footer-email">
        Pilot waitlist
      </label>
      <div className="footer-newsletter-row">
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          placeholder="you@restaurant.com"
          className="footer-newsletter-input"
          aria-label="Email address"
        />
        <button type="submit" className="footer-newsletter-btn">
          Notify me
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <p className="footer-newsletter-fine">
        One email when we open more pilot slots. No marketing.
      </p>
    </form>
  );
}
