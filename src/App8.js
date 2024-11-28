import AuthCodeInput from './AuthCodeInput'

export default function App8() {
    return (
        <AuthCodeInput
            onSubmit={(value) => {
                fetch(
                    'https://www.greatfrontend.com/api/questions/auth-code-input',
                    {
                        method: 'POST',
                        body: JSON.stringify({ otp: value}),
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
