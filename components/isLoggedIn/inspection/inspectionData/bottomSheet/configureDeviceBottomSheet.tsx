// import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
// import { StyleSheet, Text, View } from "react-native";



// interface Props {

//     title: string

// }

// type Ref = BottomSheetModal;

// const ConfigureDeviceBottomSheet = forwardRef<Ref, Props>((props, ref) => {
//     {

//         useEffect(() => {
//             const timer = setTimeout(() => {
//                 // handlePresentModalPress()
//             }, 0);
//             return () => clearTimeout(timer); // Clear the timer if the component unmounts
//         }, []);
//         // ref
//         const bottomSheetModalRef = ref;

//         // variables
//         const snapPoints = useMemo(() => ['25%', '50%', '80%'], []);

//         // callbacks
//         // const handlePresentModalPress = useCallback(() => {
//         //     bottomSheetModalRef.current?.present();
//         // }, []);
//         const handleSheetChanges = useCallback((index: number) => {
//             console.log('handleSheetChanges', index);
//         }, []);

//         const renderBackdrop = useCallback(
//             (props: any) => (
//                 <BottomSheetBackdrop
//                     {...props}
//                 />
//             ),
//             []
//         );


//         // renders
//         return (
//             <BottomSheetModalProvider>
//                 <View style={styles.container}>

//                     <BottomSheetModal
//                         ref={ref}
//                         index={1}
//                         snapPoints={snapPoints}
//                         backdropComponent={renderBackdrop}
//                         onChange={handleSheetChanges}
//                         backgroundStyle={{ borderRadius: 50 }}
//                     >
//                         <View style={styles.contentContainer}>
//                             <Text style={styles.headerText}>{props.title}</Text>
//                         </View>
//                     </BottomSheetModal>
//                 </View>
//             </BottomSheetModalProvider>
//         );
//     };
// })

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 24,
//         justifyContent: 'center',

//     },
//     contentContainer: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     headerText: {
//         fontFamily: 'Poppins-Bold',
//         fontSize: 12
//     }
// });

// export default ConfigureDeviceBottomSheet;