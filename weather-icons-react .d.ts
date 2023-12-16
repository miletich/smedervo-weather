declare module 'weather-icons-react' {
  export function WiRain(props: IconProps): JSX.Element;
  export function WiSnow(props: IconProps): JSX.Element;
  export function WiSleet(props: IconProps): JSX.Element;
}

type IconProps = { color: string; size: number };
