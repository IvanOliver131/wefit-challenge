import { BackgroundContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return <BackgroundContainer>{children}</BackgroundContainer>;
}
