// TODO make info an IIFE
// TODO make into Vue.component
module.exports = {
    el: '#contact_form', // id of the 'app'
    data: {
        name: '',   // data for the name on the form
        email:'',   // data for the email on the form
        message:'' // data for the message on the form
        //maxLength: 140 // maximum length of the form message
    },
    computed: {
         checkIfFormValid: function () {
           var valid = this.isValidName() && this.isValidEmail() && this.isValidMessage();          
           console.log("ValiD ", valid);
          return valid;  
        }
        },
    methods: { // all the actions our app can do
        isValidName: function () { 
            var valid = (this.name.length > 0) && (this.name.match(/^\s+$/) === null);
            return valid;
        },
        checkName: function () {
            if (!this.isValidName()) {
               $(".form-name").addClass("text-danger");
            }   else {
               $(".form-name").removeClass("text-danger");
            }       
        },
        

        isValidEmail: function () { // TODO is a@b a valid email?
            var valid = (this.email.length > 0) && (this.email.indexOf('@') > 0) && (this.email.match(/^\s+$/) === null) ;
            return valid;
        },
        checkEmail: function () {
            if (!this.isValidEmail()) {
               $(".form-email").addClass("text-danger");
            }   else {
               console.log('A valid e-mail!');
               $(".form-email").removeClass("text-danger");
            }       
        },
        isValidMessage: function () { 
            var maxLength = 140;
            var valid = (this.message.length > 0) &&
                (this.message.length < maxLength) && (this.message.match(/^\s+$/) === null);
            return valid;
        },
        checkMessage: function () {
            if (!this.isValidMessage()) {
               $(".form-message").addClass("text-danger");
            }   else {
               $(".form-message").removeClass("text-danger");
            }
        },
        checkIfFormValid: function () {
        //   var valid = this.isValidName() && this.isValidEmail() && this.isValidMessage();          
        //   console.log("ValiD ", valid);
          return this.name != '' && this.email != '';  
        },
        submitForm: function () {
            if (!this.checkIfFormValid()) {
                console.log(this.checkIfFormValid());
               $('#form-error-msg').addClass("show"); 
               return console.log("Please correct the form");
            }
            console.log('submitted');
            var form = '#contact_form'; // id of the 'app'
            // TODO prevent form from submitting if name, email, or message
            //      are invalid and display message
            // TODO submit to form processor
            console.log('submitting message...');
            $.ajax({url: $(form).attr('action'), method: 'POST', data: {
                name: this.name,
                email: this.email,
                message: this.message,
            }}).then(function () {
                alert('Your form was submitted!');
            }, function () {
                alert('Form submission failed');
            });
        }
    }
    
};
