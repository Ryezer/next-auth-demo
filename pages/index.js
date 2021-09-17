import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import LoginForm from '../components/LoginForm'

export default function Home() {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Auth Demo</title>
      </Head>

      <nav>
        {!session ? (
            <LoginForm 
              githubSignIn={() => signIn("github")}
            />
        ) : (
          <>
            <span>{session.user.name}</span>
            {session.user.image && (
              <img
                src={session.user.image}
                style={{ width: "25px", borderRadius: "50%" }}
              />
            )}
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </nav>
    </>
  );
}
