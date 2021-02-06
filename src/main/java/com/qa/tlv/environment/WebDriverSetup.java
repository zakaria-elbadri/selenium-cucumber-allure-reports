package com.qa.tlv.environment;

import org.apache.commons.io.FileUtils;

import com.qa.tlv.logger.Log;
import com.qa.tlv.methods.PropertiesManagementMethods;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

public class WebDriverSetup {

    static PropertiesManagementMethods props = new PropertiesManagementMethods();
    static String downloadChromeDriverPath;
    static String chromeDriverVersion = getProperty("chomeDriverVersion");
    static String baseChromeDriverDownloadPath = getProperty("baseChromeDriverDownloadPath");
    static String fromFile = baseChromeDriverDownloadPath + chromeDriverVersion + getdownloadChromeDriverPath();
    static String downloadFolderToUnzip = getProperty("downloadFolderToUnzip");
    static String toFile = getProperty("localDownloadPathToDownloadChromeDriver")
            + getdownloadChromeDriverPath();
    static String subFolderBasedOs = System.getProperty("os.name").toLowerCase().replace(" ", "_");

    static String chromeDriverPath;
    static String firefoxDriverPath;

    public static String getdownloadChromeDriverPath() {

        if (props.isWindows()) {
            downloadChromeDriverPath = getProperty("windowsChromeDriver");
        }

        else if (props.isMac()) {
            downloadChromeDriverPath = getProperty("macChromeDriver");
        }

        else if (props.isUnix()) {
            downloadChromeDriverPath = props.getProperty("unixChromeDriver");
        }
        return downloadChromeDriverPath;
    }

    public String getChromeDriverPath() {

        chromeDriverPath = getProperty("chromeDrverPath").replace("OS", subFolderBasedOs)
                .replace("VERSON", chromeDriverVersion);

        if (props.isWindows()) {
            chromeDriverPath = chromeDriverPath + ".exe";
        }

        // get fixed value of webdriver path, if download fnctionality is
        // not in use

        // else if (props.isMac()) {
        // chromeDriverPath =
        // getProperty("macChromeDrverPath");
        // }

        return chromeDriverPath;
    }

    public String getfirefoxDriverPath() {
        firefoxDriverPath = getProperty("firexoxDrverPath");

        if (props.isWindows()) {
            firefoxDriverPath = firefoxDriverPath + ".exe";
        }
        return firefoxDriverPath;
    }

    public void downloadChromeDriver() {
        Log.INFO("Download chrome driver, if not exists");

        try {

            // connectionTimeout, readTimeout = 10 seconds

            // download will take place even if the .zip is exits to cover
            // change in version case

            Log.INFO("Downloading chrome driver from: " + fromFile);
            Log.INFO("Saving chrome driver to: " + toFile);
            FileUtils.copyURLToFile(new URL(fromFile), new File(toFile).getAbsoluteFile(), 10000, 10000);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void unZipIt() {
        byte[] buffer = new byte[1024];

        try {

            // create output directory is not exists

            File folder = new File(downloadFolderToUnzip + "/" + subFolderBasedOs + "/" + chromeDriverVersion)
                    .getAbsoluteFile();
            if (!folder.exists()) {
                folder.mkdir();
            }

            // get the zip file content
            ZipInputStream zis = new ZipInputStream(new FileInputStream(toFile));
            // get the zipped file list entry
            ZipEntry ze = zis.getNextEntry();

            while (ze != null) {

                String fileName = ze.getName();
                File newFile = new File(folder + File.separator + fileName);

                Log.INFO("File to unzip : " + newFile);

                // create all non exists folders
                // else you will hit FileNotFoundException for compressed folder
                new File(newFile.getParent()).mkdirs();

                FileOutputStream fos = new FileOutputStream(newFile);

                int len;
                while ((len = zis.read(buffer)) > 0) {
                    fos.write(buffer, 0, len);
                }

                fos.close();
                ze = zis.getNextEntry();
            }

            zis.closeEntry();
            zis.close();

            Log.INFO("Unzip is finihed");

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    public String makeWebDriverExecutable() {
        String pathToChromeDriverPath = downloadFolderToUnzip + "/" + subFolderBasedOs + "/" + chromeDriverVersion
                + "/chromedriver";

        Log.INFO("Run chmod 777 command for : " + pathToChromeDriverPath);

        StringBuffer output = new StringBuffer();

        Process p;
        try {
            p = Runtime.getRuntime().exec("chmod 777 " + pathToChromeDriverPath);
            p.waitFor();
            BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()));

            String line = "";
            while ((line = reader.readLine()) != null) {
                output.append(line + "\n");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return output.toString();
    }
    
    private static String getProperty(String propName) {
        return props.getSeleniumProperty(propName);
    }
}
