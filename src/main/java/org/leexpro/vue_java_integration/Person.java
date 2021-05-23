package org.leexpro.vue_java_integration;

public final class Person {
	private String firstname;
	private String lastname;
	private int age; 
	private String occupation; 
	private String location; 
	private String relationship;

	public Person(
	        String firstname, String lastname, 
	        int age, String occupation, 
	        String location, String relationship) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		this.occupation = occupation;
		this.location = location;
		this.relationship = relationship;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getRelationship() {
		return relationship;
	}

	public void setRelationship(String relationship) {
		this.relationship = relationship;
	}
}
