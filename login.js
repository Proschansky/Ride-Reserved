// firebase setup and config
var config = {
    apiKey: "AIzaSyA6rmQdtJ_Lva9p33C2cANvJtitkJtv1wU",
    authDomain: "ride-reserved.firebaseapp.com",
    databaseURL: "https://ride-reserved.firebaseio.com",
    projectId: "ride-reserved",
    storageBucket: "ride-reserved.appspot.com",
    messagingSenderId: "357895810523"
};

firebase.initializeApp(config);

var database = firebase.database();


// Firebase pre-built UI
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically

            var userSnap = firebase.database().ref('users/' + firebase.auth().currentUser.uid);
            userSnap.update({
                username: firebase.auth().currentUser.displayName,
                email: firebase.auth().currentUser.email,
                profilePicture: firebase.auth().currentUser.photoURL
            });
            return true;
        },
        uiShown: function () {
            // Hide the log.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: "profile.html",
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'index.html',
    // Privacy policy url.
    privacyPolicyUrl: 'index.html'
};


// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


