ContactManager.module( "ContactsApp.Show", function( Show, ContactManager, Backbone, Marionette, $, _ ) {
	Show.Controller = {
		showContact : function( model ) {
			console.log( "show contact called for model ", model );
		}
	}
} );