package com.theironyard.entities;//Created by KevinBozic on 4/6/16.

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "providers")
public class Provider {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

//    @Column(nullable = false)
//    private String photoUrl;

    @Column(nullable = false)
    private boolean isOnline;

    @Column
    private String about;

    @Column
    private String specialties;

    @OneToMany
    private List<Task> tasks;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "provider")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "fileUploadId")
    private FileUpload fileUpload;

    public Provider(String firstName, String lastName, String password, String email, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
//        this.photoUrl = photoUrl;
    }

    public Provider(String firstName, String lastName, String password, String email, String phoneNumber, boolean isOnline, String about, String specialties, List<Task> tasks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.isOnline = isOnline;
        this.about = about;
        this.specialties = specialties;
        this.tasks = tasks;
    }

    public Provider() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getSpecialties() {
        return specialties;
    }

    public void setSpecialties(String specialties) {
        this.specialties = specialties;
    }

    public boolean getIsOnline() {
        return isOnline;
    }

    public void setIsOnline(boolean online) {
        isOnline = online;
    }

//    public String getUrl() {
//        return photoUrl;
//    }
//
//    public void setUrl(String url) {
//        this.photoUrl = photoUrl;
//    }
}
