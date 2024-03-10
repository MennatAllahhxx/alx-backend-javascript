import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName) {
    const p1 = signUpUser(firstName, lastName);
    const p2 = uploadPhoto(fileName);

    return Promise.allSettled([p1, p2]).then((ress) => {
        ress.forEach((res) => {
            return {
                status: res.status,
                value:res.value
            }
        });
    });
}