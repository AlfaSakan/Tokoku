import {Alert, Platform, Share} from 'react-native';
import {
  DocumentDirectoryPath,
  DownloadDirectoryPath,
  writeFile,
} from 'react-native-fs';
import xlsx from 'xlsx';

const DDP =
  Platform.OS === 'ios' ? DocumentDirectoryPath : DownloadDirectoryPath + '/';

export const exportFileExcel = async (data: object[], namaFile: string) => {
  try {
    /* convert AOA back to worksheet */
    // const ws = xlsx.utils.aoa_to_sheet(data);
    const ws = xlsx.utils.json_to_sheet(data);

    /* build new workbook */
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'SheetJS');

    /* write file */
    const wbout = xlsx.write(wb, {type: 'binary', bookType: 'xlsx'});
    const file = DDP + `${namaFile}.xlsx`;

    await writeFile(file, wbout, 'ascii');

    console.log(file);

    const result = await Share.share({
      url: file,
      message: 'share file excel',
    });

    console.log(result);
  } catch (error) {
    console.log(error);
    // @ts-ignore
    Alert.alert('exportFile Error', 'Error ' + error.message);
  }
};
