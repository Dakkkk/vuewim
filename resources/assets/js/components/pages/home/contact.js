// TODO make info an IIFE
// TODO make into Vue.component
module.exports = {
    el: '#contact_form', // id of the 'app'
    data: {
        name: '',   // data for the name on the form
        email:'',   // data for the email on the form
        message:'', // data for the message on the form
        //maxLength: 140 // maximum length of the form message
         errorClass: 'text-danger'
    },
    methods: { // all the actions our app can do
        isValidName: function () { // TODO what if name is just spaces?
            var valid = this.name.length > 0;
            console.log('checking for a valid name: ' + valid);
            return valid;
        },
        isValidEmail: function () { // TODO is a@b a valid email?
            var valid = this.email.indexOf('@') > 0;
            console.log('checking for a valid email: ' + valid);
            return valid;
        },
        isValidMessage: function () { // what is message is just spaces?
            var maxLength = 140;
            var valid = (this.message.length > 0) &&
                (this.message.length < maxLength);
            console.log('checking for a valid message: ' + valid);
            return valid;
        },
        checkMessage: function () {
            if (!this.isValidMessage()) {
               console.log('Not a valid message');
               $("textarea").addClass("text-danger");
            }   else {
               console.log('A valid message');
               $("textarea").removeClass("text-danger");
            }         
            // TODO keep the message below maxMessageLength?
            //      or maybe change the text, background, or counter color?
        },
        submitForm: function () {
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
