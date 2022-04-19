import React from "react";

function IndivProduct({ product, setActiveProduct }) {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                background: "rgba(0, 0, 0, 0.71)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}>
            <button
                style={{
                    position: "absolute",
                    top: "10px",
                    left: 10,
                    padding: 10,
                }}
                onClick={() => setActiveProduct(null)}>
                x
            </button>
            <div style={{ width: 500, height: 600, background: "#fff" }}>
                <img
                    style={{ width: "100px", height: "100px" }}
                    src={product.img}
                />
                <div>{product.title}</div>
                <div>${product.price}</div>
            </div>
        </div>
    );
}

export default IndivProduct;
