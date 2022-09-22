import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

export default defineNuxtPlugin(nuxtApp => {

    const capacitorModule = {
        async printCurrentLocation() { 
            try {
                const coordinates = await Geolocation.getCurrentPosition();
                return coordinates;
            } catch (e) { 
                console.log(e);
                return e;
            }
        },

        async askForImage() { 
            
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri,
                source: Capacitor.isNativePlatform() ? CameraSource.Prompt : CameraSource.Photos,
            });

            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            var imageUrl = image.webPath;
            return imageUrl;
        },

        platformDetails() { 
            return Capacitor.getPlatform();
        },

        async checkPermission() { 
           const permissionStatus = await Camera.checkPermissions();
            return {
                'camera': permissionStatus.camera,
                'photos': permissionStatus.photos
            };
        },

        async requestPermission() { 
            const permissionStatus = await Camera.requestPermissions(['camera', 'photos'])
            return {
                'camera': permissionStatus.camera,
                'photos': permissionStatus.photos
            };
        }

    }

    nuxtApp.provide('capacitor', capacitorModule);

})