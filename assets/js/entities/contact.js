ContactManager.module( "Entities", function( Entities, ContactManager, Backbone, Marionette, $, _ ) {
	Entities.Contact = Backbone.Model.extend( {
		urlRoot : 'contacts'
	} );

	Entities.configureStorage(Entities.Contact);

	Entities.ContactCollection = Backbone.Collection.extend( {
		url : 'contacts',
		model : Entities.Contact,
		comparator: "firstName"
	} );

	Entities.configureStorage(Entities.ContactCollection);

	var contacts;

	var initiliazeContacts = function() {
		contacts = new Entities.ContactCollection( [ {
			id          : 1,
			firstName   : "Alice",
			lastName    : "Arten",
			phoneNumber : "555-0184"
		} ] );

		contacts.forEach( function ( contact ) {
			contact.save();
		} );

		return contacts;
	};

	var API = {
		getContactEntities: function() {
			var contacts = new Entities.ContactCollection();
			contacts.fetch();

			if (contacts.length === 0) {
				// If we don't have any contacts yet, create some for convenience
				return initiliazeContacts();
			}

			return contacts;
		},

		getContactEntity: function(contactId) {
			var contact = new Entities.Contact({id : contactId});
			contact.fetch();

			return contact;
		}
	};

	ContactManager.reqres.setHandler( 'contact:entities', function() {
		return API.getContactEntities();
	} );

	ContactManager.reqres.setHandler( 'contact:entity', function(id) {
		return API.getContactEntity(id);
	});
} );