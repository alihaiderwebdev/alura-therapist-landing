export const signUpData = {
  leftSection: {
    title: "Empower Better Care, Every Session",
    subtitle: "Create your account to start managing clients, monitoring progress, and delivering impactful care—all from one secure platform."
  },
  rightSection: {
    logoAlt: "Alura Reset",
    welcomeTitle: "Welcome!",
    welcomeSubtitle: "Create a new account to start your wellness journey",
    tabNavigation: {
      signIn: "Sign In",
      signUp: "Sign Up"
    },
    form: {
      title: "Sign Up",
      subtitle: "Enter your information to create your account",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          placeholder: "Sarah",
          type: "text",
          required: true
        },
        {
          name: "lastName", 
          label: "Last Name",
          placeholder: "Johnson",
          type: "text",
          required: true
        },
        {
          name: "email",
          label: "Email",
          placeholder: "helloexample@gmail.com",
          type: "email",
          required: true
        },
        {
          name: "phoneNo",
          label: "Phone No",
          placeholder: "(555) 123-4567",
          type: "tel",
          required: true
        },
        {
          name: "password",
          label: "Password",
          placeholder: "••••••••••••",
          type: "password",
          required: true
        }
      ],
      submitButton: "Sign UP",
      bottomText: {
        text: "Already have an account?",
        linkText: "Sign In",
        linkUrl: "/login"
      }
    }
  }
};