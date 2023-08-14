# Understand permissions & Access
## 1. How is permission granted to delete a file?

On Linux, the permission to delete a file is one of the three types of permissions on a file, the other two are read and execute, and these permissions can be set separately for three classes of users : owner, groups, others.  
To grant a user the permission to delete a file we use  
``chmod o+x filename`` 

## 2.1 Create a file that your colleague can edit but not delete.

```bash
touch edit_but_not_delete.txt
chmod 664 edit_but_not_delete.txt
```
In this case, your colleague has read and write permissions for the file, but not execute or delete permissions.


## 2.2 Create a file that your colleague can delete but not edit.

```bash
touch delete_but_not_edit.txt
chmod 622 delete_but_not_edit.txt
```
In this case, your colleague has write (delete) permission, but not read or edit permissions for the file.


## 3. Does it make sense to be able to assign such rights?
Yes, it can make sense in certain scenarios. These permissions allow for fine-grained control over who can modify or delete files.  

For example:  
    <b> Edit but not delete:</b> You might want to allow your colleague to modify a configuration file but not accidentally delete it, ensuring system stability.  
    <b>Delete but not edit:</b> This can be useful in a shared environment where users need to clean up temporary files but should not be able to modify important data.

## 4. What are the practical consequences of this experience?
<b>Data Security:</b> Properly setting permissions ensures that sensitive files cannot be easily tampered with or deleted, reducing the risk of accidental or malicious data loss.  
<b>Collaboration:</b> Fine-grained permissions can help facilitate collaboration while maintaining certain restrictions, which can be essential in multi-user environments.  
<b>System Stability:</b> Preventing unauthorized or accidental deletions of critical files can help maintain system stability and prevent disruptions.   

It's important to strike a balance between security, collaboration, and ease of use when managing file permissions. Properly understanding and applying these concepts is essential for system administrators and anyone working in a Unix-like environment.