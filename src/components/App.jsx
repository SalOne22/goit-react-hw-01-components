import { Profile } from './Profile';
import { Section } from './Section';
import { Statistics } from './Statistics';
import user from 'user.json';
import data from 'data.json';

export const App = () => {
  return (
    <>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <Statistics stats={data} />
      </Section>
    </>
  );
};
