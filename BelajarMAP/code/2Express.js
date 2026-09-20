// HTTP
    //  komunikasi atau pertukaran data di internet.
    //  http itu pertukran data lebih terbuka. sedangkan https lebih terenskripsi atau aman.
// Request
    /* perpmintaan dari client ke server atau dari frontend ke backend. request bisa terdiri dari:
    GET : meminta data
    PUT : menambah data, client memintah menambahkan data ke sever
    Patch : meupdate data, clien meminta melakukan edit pada data tertentu
    Delete : meminta menghaous datatertentu

    */
// Response
    /* balasan dari server atau backend. baik permintaan terpenuhi atau tidak
        berhasil atau error
    */
// URL
    /* adalah alamat. ibarat fronten adalah PT.a yang meminta karyawan mengabil barang di PT.B
        karyawan akan di berialamat kemana dia harus pergi. di dunia internet ini di sebut URL
        ex:
        https:/backend.com:/api/suppliers/
    */
// Endpoint
    /* jika url tadi alamat, enpoint adalah scope yang lebih kecil dalam contoh sebelumnya
        PT.B yang berada di jl.ABC pada lantai ke 11.di sini endpointnya jl.ABC lantai 11
    */
// Method
    // GET meminta data
    // POST menambah data
    // PUT mengganti seluruh data
    // PATCH mengganti sebagain data
    // DELETE menghapis data
// Status Code
    // 200 ok
    // 201 berhasil di tambah
    // 400 server tidak dapat membuat permintaan karena format yang salah
    // 401 akses di tolak karena anda membutuhkan otentikasi
    // 403 server paham permintaan tapi menolak memberikan akses
    // 404 halam yang di cari tidak di temukan
    // 500 terjadi kesalahan di server 
// Headers
    /* bagian dari data yang di letakan paling atas ubtuk menjelaskan informasi latar belakang*/
// Body
    /* badan atau isi dari data
    ex : html
    <body><body/>
    json 
    {
    key : "value"
    }
    */
// JSON
    /* salah satu format pertukaran data ang populer baik dari frontend dan backed, client ke serer
    beda aplikasi atau system. selain json ada juga XML yang biasa di gunkan swift dan masih banyak lagi
    */
// Cookie
    /*  penyimpanan sementara yang di simpan di browser seperti riwayat login, session dan lain*/
// Authhentication
    /* pengcekan siapa anda? siapa yang sedang login untuk cek apakah boleh masuk ke halaman 
    sedangkan authorization tentang apa saja yang boleh anda akses dan lakukan
    */