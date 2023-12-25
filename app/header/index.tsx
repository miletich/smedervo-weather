import { MainMenu, MainMenuItem } from '@/components/MianMenu';

export default function Header() {
  return (
    <header>
      <MainMenu>
        <MainMenuItem href="/scatter-plot">Scatter Plot</MainMenuItem>
        <MainMenuItem href="/radio">Radio</MainMenuItem>
        <MainMenuItem href="/table">Table</MainMenuItem>
      </MainMenu>
    </header>
  );
}
