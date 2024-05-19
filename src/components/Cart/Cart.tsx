export function Cart(){
    return (
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cart phone</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Mã sp</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.props.gioHang.map((spGH, index) => {
                                    return <tr key={index}>
                                        <td>{spGH.maSP}</td>
                                        <td><img src={spGH.hinhAnh} alt={spGH.hinhAnh} width={50} height={50} /></td>
                                        <td>{spGH.tenSP}</td>
                                        <td>{spGH.gia.toLocaleString()}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, true) }} > + </button>
                                            {spGH.soLuong.toLocaleString()}
                                            <button className="btn btn-primary" onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, false) }}>-</button>
                                        </td>
                                        <td>{(spGH.soLuong * spGH.gia).toLocaleString()}</td>
                                        <td><button className="btn btn-danger" onClick={() => {
                                            this.props.xoaGioHang(spGH.maSP)
                                        }}>Xóa</button></td>
                                    </tr>
                                })} */}
                            </tbody>
                            <tfoot>
                                <th colSpan={5}></th>
                                <th>Tổng tiền</th>
                                <th>{}</th>
                            </tfoot>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>

                    </div>
                </div>
            </div>
        </div>

    )
}