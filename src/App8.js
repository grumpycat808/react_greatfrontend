import AuthCodeInput from './AuthCodeInput';

export default function App8() {
  return (
    <AuthCodeInput
      onSubmit={() => {
        fetch(
          'https://www.greatfrontend.com/api/questions/auth-code-input',
          {
            method: 'POST',
            body: JSON.stringify({ otp: '123456' }),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        ).then(async (res) => {
          const message = await res.text();
          alert(message);
        });
      }}
    />
  );
}
