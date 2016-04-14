package com.theironyard.entities;//Created by KevinBozic on 4/13/16.

import javax.persistence.*;

@Entity
@Table(name = "fileUploads")
public class FileUpload {

    @Id
    @Column(name = "fileUploadId")
    @GeneratedValue
    private int id;

    @Column
    private String fileName;

    @Column
    private String originalFileName;

    @OneToOne
    private Provider provider;

    @OneToOne
    private Client client;

    public FileUpload() {
    }

    public FileUpload(String originalFileName) {
        this.originalFileName = originalFileName;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getOriginalFileName() {
        return originalFileName;
    }

    public void setOriginalFileName(String originalFileName) {
        this.originalFileName = originalFileName;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
