// TODO make info an IIFE
// TODO make into Vue.component
module.exports = {
    el: '#contact_form', // id of the 'app'
    data: {
        name: '',   // data for the name on the form
        email:'',   // data for the email on the form
        message:'' // data for the message on the form
    },
    computed: {
         checkIfFormValid: function () {
            var valid = this.isValidName() && this.isValidEmail() && this.isValidMessage();          
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
      
        isValidEmail: function () { 
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var emailtest = re.test(this.email);
            var valid = (this.email.length > 0) && (this.email.indexOf('@') > 0) && (this.email.match(/^\s+$/) === null) && emailtest ;
            return valid;
        },
     
        checkEmail: function () {
            if (!this.isValidEmail()) {
               $(".form-email").addClass("text-danger");
            }   else {
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
     
        submitForm: function () {
            if (!this.checkIfFormValid()) {
               $('#form-error-msg').addClass("show"); 
               return console.log("Please correct the form");
            }
            var form = '#contact_form'; // id of the 'app'
            // TODO prevent form from submitting if name, email, or message
            //      are invalid and display message
            // TODO submit to form processor
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
