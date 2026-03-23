import * as React from "react";
import { Button } from "@/components/ui/button";

const LeadCaptureModal = React.lazy(() => import("./LeadCaptureModal"));

type LeadCaptureButtonProps = React.ComponentProps<typeof Button>;

export default function LeadCaptureButton({
  children,
  className,
  type,
  onClick,
  ...props
}: LeadCaptureButtonProps) {
  const [open, setOpen] = React.useState(false);
  const [shouldMountModal, setShouldMountModal] = React.useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    setShouldMountModal(true);
    setOpen(true);
  };

  return (
    <>
      <Button type={type ?? "button"} className={className} onClick={handleClick} {...props}>
        {children}
      </Button>

      {shouldMountModal ? (
        <React.Suspense fallback={null}>
          <LeadCaptureModal open={open} onOpenChange={setOpen} />
        </React.Suspense>
      ) : null}
    </>
  );
}
