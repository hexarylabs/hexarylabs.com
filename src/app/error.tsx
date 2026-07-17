"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Next 16 renamed the recovery prop: `unstable_retry` replaces `reset`
 * (added v16.2.0). `reset` still exists but is demoted in the docs.
 */
export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <Container>
      <div className="flex flex-col items-start gap-8 py-24">
        <h1 className="text-[2.125rem] leading-[1.2] tracking-[0.02em] md:text-[3rem] lg:text-h1">
          Something went
          <span className="text-accent"> wrong</span>
        </h1>
        <p className="max-w-[60ch] text-body-lg text-grey-600">
          An unexpected error occurred. Trying again often clears it.
          {error.digest && (
            <span className="mt-2 block text-small text-grey-600">
              Reference: {error.digest}
            </span>
          )}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => unstable_retry()} icon={false}>
            Try again
          </Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </Container>
  );
}
