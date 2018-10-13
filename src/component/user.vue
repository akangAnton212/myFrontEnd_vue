<template>
    <div>
        <div class="content">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row sm-6">
                        <div class="row sm-6">
                            <h1 class="m-0 text-dark">Informasi User</h1>
                        </div>
                    </div>
                    <div class="row sm-6">
                        <div class="row sm-6">
                            <button 
                                type="button" 
                                class="btn btn-primary btn-lg" 
                                data-toggle="modal" 
                                data-target="#modal-add">
                                Tambah Data
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    ​
            <section class="content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="box">
                            <div class="box-header">
                            <h3 class="box-title">List User</h3>
                            </div>
                            <!-- /.box-header -->
                            <div class="box-body">
                                <table id="tblBarang" class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Nama</th>
                                            <th>Password</th>
                                            <th>Alamat</th>
                                            <th>Telepon</th>
                                            <th>Akses</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <!-- /.box-body -->
                        </div>
                        <!-- /.box -->
                    </div>      
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>