import AuthCodeInput2 from './AuthCodeInput2'

export default function App8() {
    return (
        <AuthCodeInput2
            onSubmit={(value) => {
                fetch(
                    'https://www.greatfrontend.com/api/questions/auth-code-input',
                    {
                        method: 'POST',
                        body: JSON.stringify({ otp: value }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                ).then(async (res) => {
                    const message = await res.text()
                    alert(message)
                })
            }}
        />
    )
}
