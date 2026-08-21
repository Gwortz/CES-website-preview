import type { PracticeVideo } from "@/content/videos";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Section, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

/** A section of real videos from the practice's YouTube channel. */
export default function VideoSection({
  eyebrow = "From our YouTube channel",
  title,
  lede,
  videos,
  tone = "sand",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  videos: PracticeVideo[];
  tone?: "cream" | "sand" | "white" | "dark";
}) {
  if (videos.length === 0) return null;
  const cols =
    videos.length === 1
      ? "mx-auto max-w-2xl"
      : videos.length === 2
        ? "grid gap-6 md:grid-cols-2"
        : "grid gap-6 md:grid-cols-2 lg:grid-cols-3";
  return (
    <Section tone={tone}>
      <Reveal>
        <SectionHeading dark={tone === "dark"} eyebrow={eyebrow} title={title} lede={lede} />
      </Reveal>
      <Reveal className={`mt-10 ${cols}`}>
        {videos.map((video) => (
          <YouTubeEmbed key={video.id} videoId={video.id} title={video.title} />
        ))}
      </Reveal>
    </Section>
  );
}
