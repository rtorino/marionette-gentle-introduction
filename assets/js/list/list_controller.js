ContactManager.module( "ContactsApp.List", function( List, ContactManager, Backbone, Marionette, jQuery, _ ) {
	List.Controller = {
		listContacts : function() {
			var contacts = ContactManager.request( "contact:entities" );

			var contactsListView = new List.Contacts( {
				collection : contacts
			} );

			ContactManager.mainRegion.show( contactsListView );
		}
	};
} );