import { Profile } from './Profile';
import { Section } from './Section';
import user from '../user.json';

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
    </>
  );
};
