ContactManager.module( 'ContactsApp.List', function( List, ContactManager, Backbone, Marionette, jQuery, _ ) {
	List.Controller = {
		listContacts: function() {
			var contacts = ContactManager.request( 'contact:entities' );

			var contactsListView = new List.Contacts( {
				collection: contacts
			} );

			contactsListView.on( 'itemview:contact:delete', function( childView, model ) {
				model.destroy();
			} );

			contactsListView.on( 'itemview:contact:show', function( childView, model ) {
				ContactManager.trigger( 'contact:show', model.get( 'id' ) );
			} );

			ContactManager.mainRegion.show( contactsListView );
		}
	};
} );