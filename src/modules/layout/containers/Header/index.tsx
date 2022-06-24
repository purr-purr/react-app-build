import ThemeModeButton from '@modules/common/components/ThemeModeButton';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.container}>
      <ThemeModeButton />
    </header>
  );
};

export default Header;
