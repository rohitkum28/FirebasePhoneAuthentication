Sign up for firebase ussing https://firebase.google.com/.
Go to console you will be presented with this screen on completion of sign up process.
Click on add project and fill in you project details.
Click on projects on the top left side
Create a new application
Select project type, for this we will use Android.
Add your project details
To get your android project name, open your project in text-editer, locate config.xml and copy the id.
Add app nickname of your choice
Generate SHA1 using https://developers.google.com/android/guides/client-auth. Copy and paste the SHA1, and click register app.
 Download google-services.json file and Place it in the root folder of your project.
Select authentication and click on phone, enable and save.
Now, add another app and choose web as option. After completion, copy the firebase config and replace it with the config in app.module.ts
