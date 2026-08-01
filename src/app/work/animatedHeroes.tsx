import { EdenAnimatedHero } from "./EdenAnimatedHero";
import { KeepComingAnimatedHero } from "./KeepComingAnimatedHero";
import { MedicalRecordsAnimatedHero } from "./MedicalRecordsAnimatedHero";
import { SocialLeadCaptureAnimatedHero } from "./SocialLeadCaptureAnimatedHero";
import { KineinStoryHero } from "./KineinStoryHero";
import { B2BAccessUnlockHero } from "./B2BAccessUnlockHero";
import { TrueCellSyncHero } from "./TrueCellSyncHero";

export interface AnimatedHeroProps {
  aspect?: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
}

const ANIMATED_SLUGS = new Set([
  "eden",
  "keepcoming",
  "medical-records-platform",
  "social-lead-capture-automation",
  "kinein",
  "b2b-access",
  "truecell",
]);

export function hasAnimatedHero(slug: string): boolean {
  return ANIMATED_SLUGS.has(slug);
}

/** `sizes`/`eager` are only read by the two heroes backed by a next/image layer. */
export function AnimatedCaseHero({
  slug,
  ...props
}: AnimatedHeroProps & { slug: string }) {
  switch (slug) {
    case "eden":
      return <EdenAnimatedHero {...props} />;
    case "keepcoming":
      return <KeepComingAnimatedHero {...props} />;
    case "medical-records-platform":
      return <MedicalRecordsAnimatedHero {...props} />;
    case "social-lead-capture-automation":
      return <SocialLeadCaptureAnimatedHero {...props} />;
    case "kinein":
      return <KineinStoryHero {...props} />;
    case "b2b-access":
      return <B2BAccessUnlockHero {...props} />;
    case "truecell":
      return <TrueCellSyncHero {...props} />;
    default:
      return null;
  }
}
