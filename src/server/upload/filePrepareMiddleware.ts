import multer from 'multer';

const csvFilter = (req: any, file: any, cb: Function) => {
  if (file.mimetype.startsWith('text/csv')) {
    cb(null, true);
  } else {
    cb('Please upload only csv file', false);
  }
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/static/');
  },
  filename(req, file, cb) {
    const { originalname } = file;
    cb(null, originalname);
  },
});

export const upload = multer({ storage, fileFilter: csvFilter });
