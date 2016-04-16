package com.theironyard.services;//Created by KevinBozic on 4/13/16.

import com.theironyard.entities.Client;
import com.theironyard.entities.FileUpload;
import com.theironyard.entities.Provider;
import org.springframework.data.repository.CrudRepository;

public interface FileUploadRepository extends CrudRepository<FileUpload, Integer>{
    FileUpload findByClient (Client client);
    FileUpload findByProvider (Provider provider);

}
