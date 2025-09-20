#!/bin/bash

# Tên file CSV đầu vào
csv_file="danh_sach_mon_hoc_final.csv"

# Địa chỉ API endpoint
api_url="http://localhost:3000/subject"

# Kiểm tra xem file CSV có tồn tại không
if [ ! -f "$csv_file" ]; then
    echo "Lỗi: File CSV '$csv_file' không tìm thấy."
    exit 1
fi

# Đọc file CSV, bỏ qua dòng tiêu đề và xử lý từng dòng
# IFS=',' đặt dấu phân cách là dấu phẩy
# while read -r line đọc từng dòng một
tail -n +2 "$csv_file" | while IFS=',' read -r ma_mon_hoc ten_mon_hoc link; do
    # Loại bỏ ký tự xuống dòng (carriage return) từ biến 'link'
    link=$(echo "$link" | tr -d '\r')

    # Tạo JSON payload
    payload=$(jq -n \
        --arg ma "$ma_mon_hoc" \
        --arg ten "$ten_mon_hoc" \
        --arg lk "$link" \
        '{id: $ma, name: $ten, outlineUrl: $lk}')

    # Gửi yêu cầu POST đến API
    echo "Đang gửi dữ liệu cho môn học: $ma_mon_hoc"
    curl -X POST "$api_url" \
         -H "Content-Type: application/json" \
         -d "$payload"
    echo "" # Thêm dòng trống cho dễ nhìn
done

echo "Hoàn tất việc gửi dữ liệu."