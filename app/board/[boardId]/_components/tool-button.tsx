"use client";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}
export const ToolButton = ({
  label,
  icon: Icon, // to use it like a component
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) => {
  return (
    <Hint side="right" sideOffset={14} label={label}>
      <Button
        disabled={isDisabled}
        onClick={onClick}
        size="icon"
        variant={isActive ? "boardActive" : "board"}
      >
        <Icon />
      </Button>
    </Hint>
  );
};
