import createUser from '/Users/mosheyaakov/ReactLogin/login_app/src/api/RemoteApi.js'

export default async function createUserViaApi(newUserBoundary){
     return createUser(newUserBoundary)
}