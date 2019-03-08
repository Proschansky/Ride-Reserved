// Firebase setup and config
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
// Initialize the FirebaseUI Widget using Firebase (from docs)
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically

            // Get a user's profile (from docs)
            var user = firebase.auth().currentUser;

            var userSnap = firebase.database().ref('users/' + user.uid);
            userSnap.update({
                username: user.displayName,
                email: user.email,
                profilePicture: user.photoURL
            });
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: "../profile/profile.html",
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};


// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

