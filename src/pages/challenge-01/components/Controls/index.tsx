import { FastForward, Play, Rewind } from "phosphor-react";
import { ControlsContainer, ControlsContent } from "./styles";

export function Controls() {
  return (
    <ControlsContainer>
      <ControlsContent>
        <Rewind size={28} weight="fill" color="#E1E1E6" />
        <Play size={28} weight="fill" color="#E1E1E6" />
        <FastForward size={28} weight="fill" color="#E1E1E6" />
      </ControlsContent>
    </ControlsContainer>
  );
}
