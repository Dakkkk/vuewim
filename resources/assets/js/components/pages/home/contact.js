// TODO make info an IIFE
// TODO make into Vue.component
module.exports = {
    el: '#contact_form', // id of the 'app'
    data: {
        title: '',   // data for the name on the form
        email:'',   // data for the email on the form
        message:'' // data for the message on the form
    },
    
    computed: {
         checkIfFormValid: function () {
            var valid = this.isValidTitle() && this.isValidEmail() && this.isValidMessage();          
            return valid;  
          }
        },

     methods: { // all the actions our app can do
      
        isValidTitle: function () { 
            var valid = (this.title.length > 0) && (this.title.match(/^\s+$/) === null);
            return valid;
        },
      
        checkTite: function () {
            if (!this.isValidTitle()) {
               $(".form-title").addClass("text-danger");
            }   else {
               $(".form-title").removeClass("text-danger");
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
            // if (!this.checkIfFormValid()) {
            //    return;
            // }
            var form = '#contact_form'; // id of the 'app'
            // TODO prevent form from submitting if name, email, or message
            //      are invalid and display message
            // TODO submit to form processor
            $.ajax({url: $(form).attr('action'), method: 'POST', data: {
                title: this.title,
                email: this.email,
                message: this.message,
            }}).then(function () {
                $('#message-sent').addClass("show"); 
            }, function () {
                $('#message-fail').addClass("show"); 
            });
        }
    }
   
};
