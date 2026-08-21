import ImagePh from "@/components/ImagePh";

/**
 * Doctor headshot with automatic fallback. Drop a real photo at
 * /public/images/doctors/<slug>.jpg and set `photo` on the doctor record;
 * until then the labeled placeholder renders.
 */
export default function DoctorPhoto({
  photo,
  name,
  className = "aspect-[4/5]",
  rounded = "rounded-2xl",
}: {
  photo?: string;
  name: string;
  className?: string;
  rounded?: string;
}) {
  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt={`Portrait of ${name}`}
        className={`w-full border border-pine-900/10 object-cover ${rounded} ${className}`}
      />
    );
  }
  return (
    <ImagePh
      variant="portrait"
      label={`${name} — portrait`}
      className={className}
      rounded={rounded}
    />
  );
}
