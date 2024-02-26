import PageHeader from '../ui/PageHeader';
import CopyButton from '../ui/CopyButton';
import styles from '../page.module.scss';

const tabBarItems = () => {
  return [
    { name: 'Aktiv' },
    { name: 'Inaktiv' },
    { name: 'Abbestellt' },
    { name: 'filtern' },
  ];
};

export default function Page() {
  return (
    <main className={styles.main}>
      <PageHeader tabBarItems={tabBarItems()}>
        <div>
          <h1>Mitglieder</h1>
          <p>Das sind die Mitglieder deiner Community</p>
        </div>
        <CopyButton text='Einladung kopieren' />
      </PageHeader>
    </main>
  );
}
