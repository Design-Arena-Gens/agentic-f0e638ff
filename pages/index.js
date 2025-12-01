import Head from 'next/head';
import Reading from '../components/Reading';
import { getReadingForUser } from '../lib/astrology';

export default function Home() {
  const reading = getReadingForUser();
  const { identity, gardenLeaveEndISO } = reading;

  return (
    <>
      <Head>
        <title>Career Reading ? Mercury Mahadasha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personalized career reading and breakthrough windows." />
      </Head>
      <main>
        <h1>Career Outlook</h1>
        <p>
          <strong>Birth:</strong> {identity.birthDateISO} ? {identity.birthTimeLocal} ? {identity.birthPlace}
          <span className="badge">{identity.currentDasha}</span>
        </p>
        <p>
          <strong>Garden leave ends:</strong>{' '}
          <span className="date">{new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(gardenLeaveEndISO))}</span>
        </p>

        <Reading reading={reading} />

        <footer>
          This is guidance-oriented and not deterministic. Use judgment and local context.
        </footer>
      </main>
    </>
  );
}
