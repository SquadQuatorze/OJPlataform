import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: 'Iv1.fc8a36e330ae08c4',
            ClientSecret: '894d39f4f4d9116be8af03b4137a4ed9274d736e',
            scope:'read:user',
        })
    ]
})